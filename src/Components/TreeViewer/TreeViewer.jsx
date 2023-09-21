import { useEffect, useState } from "react";
import Tree from "react-d3-tree";
const orgChart = [
  {
    id: 1,
    name: "সুশীল ",
    children: [
      {
        name: "সুনীল ",
        children: [
          {
            name: "সপরী ",
          },
          {
            name: "শিউলি ",
          },
          {
            name: "সুজয় ",
            children: [
              {
                name: "রনিত",
              },
            ],
          },
          {
            name: "ফুলকি ",
          },
        ],
      },
      {
        name: "সঞ্জিত",
        children: [
          {
            name: "সুব্রত",
          },
          {
            name: "সমাপ্তি",
          },
        ],
      },
      {
        name: "প্রশান্ত",
        children: [
          {
            name: "প্রীতি",
          },
          {
            name: "রিতু",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "ওমিও ",
    children: [
      {
        name: " চিত্ত ",
        children: [
          {
            name: "সিথী",
          },
          {
            name: "সিমান্ত",
          },
        ],
      },
      {
        name: "নিত্য",
        children: [
          {
            name: "শ্রাবণ",
          },
          {
            name: "স্বাধীন",
          },
        ],
      },
      {
        name: "নিরাঞ্জন",
        children: [
          {
            name: "প্রমিত",
          },
          {
            name: "প্রিয়াস",
          },
        ],
      },
    ],
  },
];
export default function TreeViewer() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const selectedName = orgChart.filter((value) => value.id == 1);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1 className="text-center my-5 text-2xl font-bold text-primary">
        মৃত: সুশীল দাসের পরিবার
      </h1>
      <div id="treeWrapper" className="w-screen h-screen">
        <Tree
          data={selectedName}
          orientation={"vertical"}
          width={200}
          height={200}
          translate={{
            x: windowDimensions.width / 2,
            y: windowDimensions.height / 16,
          }}
        />
      </div>
    </div>
  );
}
