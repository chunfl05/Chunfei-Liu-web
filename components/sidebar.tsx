import Image from "next/image";
import { Navigation } from "./navigation";
import { SocialLinks } from "./social-links";

export function Sidebar() {
  return (
    <header className="md:sticky md:top-0 md:flex md:max-h-screen md:w-1/2 md:flex-col md:justify-between md:py-24 lg:py-24">
      <div>
        <div className="flex items-start gap-6 mb-6">
          <div>
            <h1 className="whitespace-nowrap text-2xl font-bold tracking-tight text-highlight sm:text-3xl">
              Chunfei Liu
            </h1>
          </div>
          <div className="w-44 h-56 flex-shrink-0 overflow-hidden rounded-md border border-border bg-muted">
            <Image
              src="/WechatIMG71.jpeg"
              alt="ID photo"
              width={320}
              height={420}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="mt-8">
          <Navigation />
        </div>
      </div>

      <div className="mt-8 md:mt-0">
        <SocialLinks />
      </div>
    </header>
  );
}
