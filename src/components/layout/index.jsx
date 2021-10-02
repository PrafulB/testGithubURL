import React from 'react';

const classes = {
  wrapper: 'p-8 relative max-w-screen-xl xs:p-24 dark:bg-gray-700',
  outerWrapper: 'min-w-full min-h-screen relative dark',
  svg: 'hidden fixed transform right-0 top-5 z-0 xl:block',
  templateWrapper: 'absolute text-gray-600 dark:text-gray-300 right-0 bottom-0 pr-3 pb-1 italic'
};

const Layout = ({ children }) => {
  return (
    <div className={classes.outerWrapper}>
      <svg
        className={classes.svg}
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        style={{pointerEvents: 'none'}}
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              className="text-gray-200"
              fill="#edf2f7"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        />
      </svg>
      <div className={classes.wrapper}>{children}</div>
      <div className={classes.templateWrapper}>Template by <u><a href="https://github.com/RyanFitzgerald/devfolio" target="__blank">Ryan Fitzgerald</a></u></div>
    </div>
  );
};

export default Layout;
