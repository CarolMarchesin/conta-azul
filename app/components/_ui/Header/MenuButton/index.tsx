import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import Drawer from "../../Drawer";
import Image from "next/image";
import { menuData } from "@/constants/menuItems";
import { DropdownButton } from "../../DropdownButton";
import { listSocialMedia } from "@/constants/socialMediaLinks";

export const MenuButton: React.FC = () => {
  const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [isOpenDropdown, setIsOpenDropdown] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveItem(index);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  const handleOpenDropdown = (index: number) => {
    setIsOpenDropdown(isOpenDropdown === index ? null : index);
  };

  return (
    <>
      <button
        className="text-gray-400 gap-3 text-sm hover:text-gray-600 inline-flex lg:hidden font-medium"
        onClick={() => setIsDrawerMenuOpen(true)}
      >
        <Bars3Icon className="h-5" />
        Menu
      </button>

      {isDrawerMenuOpen && (
        <Drawer
          isOpen={isDrawerMenuOpen}
          onClose={() => setIsDrawerMenuOpen(false)}
        >
          <div className="flex flex-col h-full">
            <div className="flex-grow p-4 flex flex-col gap-4">
              {menuData.map((item, index) => (
                <div key={index}>
                  {item.fields ? (
                    <DropdownButton
                      label={item.label}
                      index={index}
                      isOpenDropdown={isOpenDropdown}
                      activeItem={activeItem}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={handleOpenDropdown}
                    >
                      {item.fields.map((field, fieldIndex) => (
                        <button
                          className="text-sm text-darksilver inline-flex items-center justify-center h-10 w-full"
                          key={fieldIndex}
                        >
                          {field.label}
                        </button>
                      ))}
                    </DropdownButton>
                  ) : (
                    <button
                      key={item.label}
                      className="text-black font-medium text-sm inline-flex items-center justify-center w-full"
                    >
                      {item.label}
                    </button>
                  )}
                  <hr className="w-full mt-4" />
                </div>
              ))}
            </div>

            <form className="mb-8">
              <div className="flex items-center gap-2 border border-gray-500 rounded-md">
                <MagnifyingGlassIcon className="h-7 mx-2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar"
                  className="w-full p-2 pl-0 bg-transparent focus:outline-none"
                />
              </div>
            </form>

            <div className="p-4 flex gap-10 justify-center">
              {listSocialMedia.map((socialMedia, index) => (
                <a href={socialMedia.url} target="_blank" key={index}>
                  <Image
                    src={socialMedia.icon}
                    alt="Logo"
                    width={22}
                    height={22}
                  />
                </a>
              ))}
            </div>
          </div>
        </Drawer>
      )}
    </>
  );
};
