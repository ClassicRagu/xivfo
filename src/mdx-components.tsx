import { Link, Typography } from "@mui/material";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import NextLink from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <Typography variant="h2" component="h1" id={children}>{children}</Typography>
    ),
    h2: ({ children }) => (
      <Typography variant="h3" component="h2" id={children}>{children}</Typography>
    ),
    h3: ({ children }) => (
      <Typography variant="h4" component="h3" id={children}>{children}</Typography>
    ),
    h4: ({ children }) => (
      <Typography variant="h5" component="h4" id={children}>{children}</Typography>
    ),
    a: (props) => (
      <Link component={NextLink} href={props.href}>{props.children}</Link>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
