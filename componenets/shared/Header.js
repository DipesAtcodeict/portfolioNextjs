import React from "react";
import Link from "next/link";
import {Link as NextLink} from '../../routes';

import '../../styles/main.scss';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/portfolios">
          <a>Portolios</a>
        </Link>
        <Link href="/blogs">
          <a>Blogs</a>
        </Link>
        <Link href="/cv">
          <a>CV</a>
        </Link>
        <NextLink route='/test/1'>
          Test 1
        </NextLink>
      </React.Fragment>
    );
  }
}

export default Header;
