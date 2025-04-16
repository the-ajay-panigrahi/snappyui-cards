
import React, { useState } from "react";
import CardBase from "../CardBase";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Bell, CheckCircle2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NotificationItem {
  id: number;
  message: string;
  time: string;
  read: boolean;
}

const NotificationCard = () => {
  const [pushEnabled, setPushEnabled] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    { id: 1, message: "Your call has been confirmed.", time: "1 hour ago", read: false },
    { id: 2, message: "You have a new message!", time: "1 hour ago", read: false },
    { id: 3, message: "Your subscription is expiring soon!", time: "2 hours ago", read: false },
  ]);

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, read: true }))
    );
  };

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <CardBase
      variant="glass"
      className="w-full max-w-md p-6 relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
      
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-1 tracking-tight">Notifications</h2>
        <p className="text-white/60 mb-4">
          You have {unreadCount} unread message{unreadCount !== 1 ? "s" : ""}.
        </p>

        <div className="p-4 bg-white/5 rounded-lg mb-4 backdrop-blur-sm border border-white/10 flex items-center justify-between transition-all duration-300 hover:bg-white/10 hover:border-white/20">
          <div className="flex items-center gap-3">
            <Bell size={20} className="text-white/80 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-medium">Push Notifications</span>
          </div>
          <Switch
            checked={pushEnabled}
            onCheckedChange={setPushEnabled}
            className="data-[state=checked]:bg-blue-500"
          />
        </div>

        <ScrollArea className="h-[180px] pr-2">
          <div className="space-y-3 py-1">
            {notifications.map((notification, index) => (
              <div
                key={notification.id}
                className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 
                  ${notification.read ? "opacity-60" : "opacity-100"} 
                  hover:bg-white/5 cursor-pointer
                  transform hover:-translate-y-0.5
                  transition-all ease-out duration-300
                  ${index === 0 ? 'animate-fade-in' : index === 1 ? 'animate-fade-in delay-100' : 'animate-fade-in delay-200'}`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className={`w-2 h-2 rounded-full mt-2 transition-all duration-300 ${notification.read ? "bg-white/20" : "bg-blue-500"}`}></div>
                <div className="flex-1">
                  <p className="font-medium">{notification.message}</p>
                  <p className="text-sm text-white/60">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <Button
          variant="outline" 
          className="w-full mt-6 bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 group/btn"
          onClick={markAllAsRead}
        >
          <CheckCircle2 size={16} className="transition-transform duration-300 group-hover/btn:scale-110" />
          <span>Mark all as read</span>
        </Button>
      </div>
    </CardBase>
  );
};

export default NotificationCard;
