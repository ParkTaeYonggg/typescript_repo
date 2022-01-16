import React from "react";
import { Route, Link } from "react-router-dom";
import Signup from "./signup/signup";
import LazyloadMain from "./lazyload/lazyloadMain";
import TestUseMemo from "./memoAndPure/testUseMemo";

import Ex01 from "./typescript_pr/ex01/ex01";
import Ex02 from "./typescript_pr/ex02/ex02";

function App () {
    return (
        <>
            <Link to="/ex01">ex01</Link><br/>
            <Link to="/ex02">ex02</Link>
            <Route path="/ex01" component={Ex01} />
            <Route path="/ex02" component={Ex02} />
            <hr/>
            <Link to="/">메인</Link>
        </>
    );
}

export default App;