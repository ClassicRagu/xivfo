"use client";
import { Link } from "@mui/material";
import { useHeadsObserver } from "@/hooks/shared/TableOfContentHook";
import { useEffect, useState } from "react";
import NextLink from "next/link";

type ContentObj = { id: string; text: string; level: number };

const getClassName = (level: number) => {
  switch (level) {
    case 2:
      return { marginBottom: "15px" };
    case 3:
      return {
        marginLeft: "10px",
        listStyleType: "circle",
        marginBottom: "15px",
      };
    case 4:
      return {
        marginLeft: "20px",
        listStyleType: "square",
        marginBottom: "15px",
      };
    default:
      return {};
  }
};

function getWindowDimensions() {
  if(window){
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };} else {
    return {width: 0, height: 0}
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function TableOfContent() {
  const [headings, setHeadings] = useState<ContentObj[]>([]);
  const { width } = useWindowDimensions();
  const { activeId } = useHeadsObserver();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3, h4")).map(
      (elem) => ({
        id: elem.id,
        text: elem.innerHTML,
        level: Number(elem.nodeName.charAt(1)),
      })
    );
    setHeadings(elements);
  }, []);

  return (
    <nav
      style={{
        maxWidth: "350px",
        minWidth: "300px",
        padding: "16px",
        alignSelf: "flex-start",
        position: "sticky",
        top: "48px",
        maxHeight: "calc(100vh - 70px)",
        overflow: "auto",
        marginTop: "150px",
      }}
      hidden={width < 1000}
    >
      <h1>
        {"On this page"}
      </h1>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} style={getClassName(heading.level)}>
            <Link
              component={NextLink}
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                const docHeading = document.querySelector(`#${heading.id}`);
                if (docHeading) {
                  docHeading.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
              style={{
                fontWeight: activeId === heading.id ? "bold" : "normal",
              }}
            >
              {heading.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContent;
