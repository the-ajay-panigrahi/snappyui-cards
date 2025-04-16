// NotificationCard.tsx

import React from "react";
import CardBase from "../CardBase";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Bell, CheckCircle2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface NotificationItem {
  id: number;
  message: string;
  time: string;
  read: boolean;
}

interface NotificationCardProps {
  notifications: NotificationItem[];
  setNotifications: (notifications: NotificationItem[]) => void;
  pushEnabled: boolean;
  setPushEnabled: (enabled: boolean) => void;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  notifications,
  setNotifications,
  pushEnabled,
  setPushEnabled,
}) => {
  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <CardBase
      variant="glass"
      className="w-full max-w-md p-6 relative group border border-border rounded-xl backdrop-blur-md
                 bg-white/60 dark:bg-white/5 shadow-md transition-colors duration-500"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-100/20 to-transparent 
                      dark:from-blue-600/10 dark:via-purple-600/10 rounded-xl opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      ></div>

      <div className="relative z-10 text-gray-900 dark:text-white">
        <h2 className="text-2xl font-bold mb-1">Notifications</h2>
        <p className="text-gray-600 dark:text-white/60 mb-4">
          You have {unreadCount} unread message{unreadCount !== 1 ? "s" : ""}.
        </p>

        {/* Push Toggle */}
        <div
          className="p-4 rounded-lg mb-4 border flex items-center justify-between
                        bg-white/80 dark:bg-white/5 dark:border-white/10 border-gray-300 transition-all duration-300
                        hover:bg-white/90 dark:hover:bg-white/10"
        >
          <div className="flex items-center gap-3">
            <Bell size={20} className="text-gray-800 dark:text-white/80" />
            <span className="font-medium text-gray-800 dark:text-white">
              Push Notifications
            </span>
          </div>
          <Switch
            checked={pushEnabled}
            onCheckedChange={setPushEnabled}
            className="data-[state=checked]:bg-blue-500"
          />
        </div>

        {/* Notification List */}
        <ScrollArea className="h-[180px] pr-2">
          <div className="space-y-3 py-1">
            {notifications.map((notification, index) => (
              <div
                key={notification.id}
                className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 
                  ${notification.read ? "opacity-60" : "opacity-100"} 
                  hover:bg-gray-100 dark:hover:bg-white/5 cursor-pointer
                  transform hover:-translate-y-0.5`}
                onClick={() => markAsRead(notification.id)}
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 transition-all duration-300 
                    ${
                      notification.read
                        ? "bg-gray-300 dark:bg-white/20"
                        : "bg-blue-500"
                    }`}
                ></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 dark:text-white">
                    {notification.message}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-white/60">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Mark All Button */}
        <Button
          variant="outline"
          className="w-full mt-6 bg-gray-100 hover:bg-gray-200 border border-gray-300 
                     dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 
                     text-gray-800 dark:text-white font-medium flex items-center justify-center gap-2"
          onClick={markAllAsRead}
        >
          <CheckCircle2 size={16} />
          <span>Mark all as read</span>
        </Button>
      </div>
    </CardBase>
  );
};

export default NotificationCard;
