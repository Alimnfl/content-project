"use client";

import React, { useState } from "react";
import {
  RemixiconComponentType,
  RiAddCircleLine,
  RiAddLine,
  RiChat3Line,
  RiFilmFill,
  RiFilmLine,
  RiHeartFill,
  RiHeartLine,
  RiHome2Fill,
  RiHome2Line,
  RiMenuLine,
  RiMetaLine,
  RiSearchLine,
  RiSendPlaneFill,
  RiSendPlaneLine,
  RiStickyNoteLine,
  RiThreadsLine,
} from "@remixicon/react";
import Image, { StaticImageData } from "next/image";
import {
  Alimnfl,
  AlimnflPose,
  AlimnflPost,
  BlueTickInstagram,
} from "@/public/instagram-homepage";

interface InstagramIconProps {
  id: number;
  iconActive: RemixiconComponentType | StaticImageData;
  iconNonActive: RemixiconComponentType | StaticImageData;
  notification?: number;
  type: "image" | "icon";
  title?: string;
}

export default function Page() {
  const INSTAGRAM_HEADER_ICONS = [
    {
      id: 1,
      icon: RiAddCircleLine,
    },
    {
      id: 2,
      icon: RiHeartLine,
    },
  ];

  const INSTAGRAM_POST_ICONS = [
    {
      id: 1,
      icon: RiHeartLine,
    },
    {
      id: 3,
      icon: RiChat3Line,
    },
    {
      id: 3,
      icon: RiSendPlaneLine,
    },
  ];

  const INSTAGRAM_FOOTER_ICONS: InstagramIconProps[] = [
    {
      id: 1,
      iconActive: RiHome2Fill,
      iconNonActive: RiHome2Line,
      type: "icon",
      title: "Home",
    },
    {
      id: 2,
      iconActive: RiSearchLine,
      iconNonActive: RiSearchLine,
      type: "icon",
      title: "Explore",
    },
    {
      id: 3,
      iconActive: RiFilmFill,
      iconNonActive: RiFilmLine,
      type: "icon",
      title: "Reels",
    },
    {
      id: 4,
      iconActive: RiSendPlaneFill,
      iconNonActive: RiSendPlaneLine,
      type: "icon",
      notification: 20,
      title: "Messages",
    },
    {
      id: 5,
      iconActive: RiHeartFill,
      iconNonActive: RiHeartLine,
      type: "icon",
      notification: 20,
      title: "Notifications",
    },
    {
      id: 6,
      iconActive: Alimnfl,
      iconNonActive: Alimnfl,
      type: "image",
      title: "Profile",
    },
  ];

  const INSTAGRAM_SIDEBAR_MORE: InstagramIconProps[] = [
    {
      id: 1,
      iconActive: RiMetaLine,
      iconNonActive: RiMetaLine,
      type: "icon",
      title: "Meta AI",
    },
    {
      id: 2,
      iconActive: RiThreadsLine,
      iconNonActive: RiThreadsLine,
      type: "icon",
      title: "Threads",
    },
    {
      id: 3,
      iconActive: RiMenuLine,
      iconNonActive: RiMenuLine,
      type: "icon",
      title: "More",
    },
  ];

  const DATA_POST_INSTAGRAM = [
    {
      id: 1,
      user: {
        username: "alimnfl",
        avatar: Alimnfl,
        isVerified: true,
      },
      audio: "Original audio",
      postImage: AlimnflPost,
      likes: "1,200",
      caption: "Life as Fully Remote Frontend Engineer",
      commentsCount: 46,
      timeAgo: "2 days ago",
      icons: [RiHeartLine, RiChat3Line, RiSendPlaneLine],
      badgeIcon: BlueTickInstagram,
    },
    {
      id: 2,
      user: {
        username: "alimnfl",
        avatar: Alimnfl,
        isVerified: true,
      },
      audio: "Original audio",
      postImage: AlimnflPose,
      likes: "500k",
      caption: "",
      commentsCount: 130,
      timeAgo: "2 months ago",
      icons: [RiHeartLine, RiChat3Line, RiSendPlaneLine],
      badgeIcon: BlueTickInstagram,
    },
  ];

  const [instagramState, setInstagramState] = useState<string | undefined>(
    "Home"
  );

  return (
    <>
      <div className="flex flex-row">
        <div className="sticky hidden md:flex w-full md:max-w-[180px] lg:max-w-[240px] md:px-[20px] md:pr-[80px]">
          <div className="flex flex-col overflow-hidden top-0 justify-between w-full md:max-w-[180px] lg:max-w-[240px] items-start border-r border-gray-800 fixed h-screen bg-black md:px-[20px] md:pr-[80px] py-10">
            <div className="flex flex-col gap-8">
              <h2 className="text-xl font-semibold pb-6 cursor-pointer">
                Instagram
              </h2>
              {INSTAGRAM_FOOTER_ICONS.map((data) => {
                if (data.type === "icon") {
                  const Icon =
                    data.title === instagramState
                      ? (data.iconActive as RemixiconComponentType)
                      : (data.iconNonActive as RemixiconComponentType);
                  return (
                    <div
                      onClick={() => setInstagramState(data.title)}
                      key={data.id}
                      className="relative flex gap-4 w-full items-center flex-row cursor-pointer"
                    >
                      <div className="relative">
                        <Icon size={30} />
                        {data.notification && (
                          <span className="absolute -top-1 -right-1 bg-red-500 rounded-full text-[9px] py-[1px] px-[3px] font-semibold">
                            {data.notification}
                          </span>
                        )}
                      </div>
                      <span
                        className={
                          instagramState === data.title ? "font-semibold" : ""
                        }
                      >
                        {data.title}
                      </span>
                    </div>
                  );
                }
                return (
                  <div
                    onClick={() => setInstagramState(data.title)}
                    key={data.id}
                    className="relative flex gap-4 w-full items-center flex-row cursor-pointer"
                  >
                    <Image
                      className="cursor-pointer rounded-full"
                      src={data.iconActive as StaticImageData}
                      alt="footer icon"
                      width={30}
                      height={30}
                    />
                    <span
                      className={
                        instagramState === data.title ? "font-semibold" : ""
                      }
                    >
                      {data.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-8">
              {INSTAGRAM_SIDEBAR_MORE.map((data) => {
                if (data.type === "icon") {
                  const Icon =
                    data.title === instagramState
                      ? (data.iconActive as RemixiconComponentType)
                      : (data.iconNonActive as RemixiconComponentType);
                  return (
                    <div
                      onClick={() => setInstagramState(data.title)}
                      key={data.id}
                      className="relative flex gap-4 w-full items-center flex-row cursor-pointer"
                    >
                      <div className="relative">
                        <Icon size={30} />
                        {data.notification && (
                          <span className="absolute -top-1 -right-1 bg-red-500 rounded-full text-[9px] py-[1px] px-[3px] font-semibold">
                            {data.notification}
                          </span>
                        )}
                      </div>
                      <span
                        className={
                          instagramState === data.title ? "font-semibold" : ""
                        }
                      >
                        {data.title}
                      </span>
                    </div>
                  );
                }
                return (
                  <div
                    onClick={() => setInstagramState(data.title)}
                    key={data.id}
                    className="relative flex gap-4 w-full items-center flex-row cursor-pointer"
                  >
                    <Image
                      className="cursor-pointer rounded-full"
                      src={data.iconActive as StaticImageData}
                      alt="footer icon"
                      width={30}
                      height={30}
                    />
                    <span
                      className={
                        instagramState === data.title ? "font-semibold" : ""
                      }
                    >
                      {data.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-full gap-3 p-4 sm:p-8 md:p-10 ">
          <div className="flex flex-row w-full justify-between md:hidden">
            <h2 className="text-2xl font-semibold">Instagram</h2>
            <div className="flex flex-row gap-2">
              {INSTAGRAM_HEADER_ICONS.map((data) => (
                <data.icon size={30} key={data.id} />
              ))}
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col items-center gap-2 relative justify-start">
              <div className="flex flex-row relative">
                <div className="rounded-full border border-transparent overflow-hidden w-[50px] relative">
                  <Image alt="Image Stories Alimnfl Instagram" src={Alimnfl} />
                </div>
                <div className="absolute right-0 bottom-0 text-black bg-white rounded-full">
                  <RiAddLine size={12} />
                </div>
              </div>
              <span className="text-xs font-light">Your story</span>
            </div>
          </div>

          {DATA_POST_INSTAGRAM.map((data, index) => {
            const isLast = index === DATA_POST_INSTAGRAM.length - 1;
            return (
              <div
                className={`flex flex-col mx-10 sm:mx-16 md:mx-18 md:max-w-[400px] ${
                  isLast ? "mb-14" : "mb-4"
                }`}
                key={data.id}
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row  items-center gap-2">
                    <div className="rounded-full border border-transparent overflow-hidden">
                      <Image
                        alt="Image Stories Alimnfl Instagram"
                        src={Alimnfl}
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className="flex flex-col gap-[1px]">
                      <div className="flex flex-row gap-2 items-center">
                        <h3 className="font-semibold text-sm">alimnfl</h3>
                        {data.badgeIcon && (
                          <Image
                            alt="BlueTick Alimnfl Instagram "
                            src={BlueTickInstagram}
                            width={18}
                            height={14}
                          />
                        )}
                      </div>
                      <p className="text-xs font-medium">{data.audio}</p>
                    </div>
                  </div>
                  <div>
                    <RiMenuLine size={20} />
                  </div>
                </div>

                <div className=" px-6 py-5">
                  <Image src={data.postImage} alt="Alimnfl Post" />
                </div>

                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-2">
                    {INSTAGRAM_POST_ICONS.map((data, index) => (
                      <data.icon key={index} size={28} />
                    ))}
                  </div>
                  <div>
                    <RiStickyNoteLine size={28} />
                  </div>
                </div>

                <div className="flex flex-col gap-1 py-2">
                  <h3 className="font-semibold">{data.likes} likes</h3>
                  <div className="flex flex-row gap-1 items-center">
                    <h3 className="font-semibold text-sm">
                      {data.user.username}
                    </h3>
                    <Image
                      alt="BlueTick Alimnfl Instagram"
                      src={BlueTickInstagram}
                      width={18}
                      height={14}
                    />
                    <p className="text-sm">{data.caption}</p>
                  </div>
                  <span className="text-sm">
                    View all {data.commentsCount} comments
                  </span>
                  <span className="text-xs">{data.timeAgo}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-row md:hidden items-center w-full bg-black fixed bottom-0 border-t-1 border-gray-700 justify-between px-[50px] py-4">
        {INSTAGRAM_FOOTER_ICONS.map((data) => {
          if (data.title === "Notifications") {
            return;
          }
          if (data.type === "icon") {
            const Icon =
              data.title === instagramState
                ? (data.iconActive as RemixiconComponentType)
                : (data.iconNonActive as RemixiconComponentType);
            return (
              <div
                onClick={() => setInstagramState(data.title)}
                key={data.id}
                className="relative"
              >
                <Icon size={20} className="cursor-pointer" />
                {data.notification && (
                  <span className="absolute -top-2 -right-2 bg-red-500 rounded-full text-[9px] py-[1px] px-[3px] font-semibold">
                    {data.notification}
                  </span>
                )}
              </div>
            );
          }
          return (
            <div key={data.id}>
              <Image
                className="cursor-pointer rounded-full"
                src={data.iconActive as StaticImageData}
                alt="footer icon"
                width={26}
                height={26}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
