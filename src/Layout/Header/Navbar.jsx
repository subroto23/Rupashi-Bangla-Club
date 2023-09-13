import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import FeedIcon from "@mui/icons-material/Feed";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import PersonIcon from "@mui/icons-material/Person";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="text-white"
          className="flex items-center gap-1 rounded-full  py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="lg"
            alt="tania andrew"
            className="border-2 border-y-light-blue-50 p-0.5"
            src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/325170633_738017507544156_780827080654787698_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=qIs22aqkIn0AX8iKKkI&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfCm3tB49EmsZHi2SSka6ZWh7HLi5_-YHimhqqZVjqAC4A&oe=6506143C"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-4 w-4 transition-transform text-white ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list menu
const navListMenuItems = [
  {
    title: "দূর্গা পূজা",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "কালী পূজা",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "সরস্বতী পূজা",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
  {
    title: "চৈত্র পূজা",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
  {
    title: "অন্যান্য পূজা",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="text-white" className="mb-1">
          {title}
        </Typography>
        <Typography
          variant="small"
          className="font-normal text-lime-600"
        >
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-white lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] font-bold " />{" "}
              অন্যান্য{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            {/* <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" /> */}
            <Typography
              as="a"
              href="#"
              className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-white lg:text-2xl"
            >
              <img
                className="border-4 border-x-amber-50"
                src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t1.6435-9/71028319_2431248017147700_4297449331830554624_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8631f5&_nc_ohc=2zOWnJYdi4sAX-27TI4&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfD7YhryuZ8x9bohoUb8Q1lVelIIPm0ztAfUOdnc7e_SnQ&oe=65296BAB"
                alt=""
              />
            </Typography>
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-white lg:hidden">
        <Square3Stack3DIcon className="h-[18px] font-bold" /> অন্যান্য{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "খবর",
    icon: FeedIcon,
  },
  {
    label: "ফটোগ্যালারী",
    icon: PhotoLibraryIcon,
  },
  {
    label: "প্রতিষ্ঠাতা সদস্যবৃন্দ",
    icon: PersonIcon,
  },
  {
    label: "আমাদের সেবাসমূহ",
    icon: BookmarksIcon,
  },
];

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon }) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="text-white"
          className="font-bold"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {label}
          </MenuItem>
        </Typography>
      ))}
      <NavListMenu />
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  // container mx-auto p-2  lg:pl-6 leading-none
  return (
    <Navbar
      className="block fixed z-50 max-w-full rounded-none shadow-none backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border-none bg-[#1f5ba4] text-white container mx-auto p-2 lg:pl-6 leading-none
    
    "
    >
      <div className="relative mx-auto flex items-center text-white">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-white "
        >
          <img
            className="border-2 border-x-amber-50 w-12 h-12"
            src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t1.6435-9/71028319_2431248017147700_4297449331830554624_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8631f5&_nc_ohc=2zOWnJYdi4sAX-27TI4&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfD7YhryuZ8x9bohoUb8Q1lVelIIPm0ztAfUOdnc7e_SnQ&oe=65296BAB"
            alt=""
          />
        </Typography>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="text-white"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden text-white"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
