import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import styles from './Navigation.module.css';

const Navigation = (props) => {
  const context = useContext(AuthContext);
  return (
    // <AuthContext.Consumer>
    //   {(context) => {
    //     <nav className={styles.nav}>
    //       <ul>
    //         {context.isLoggedIn && (
    //           <li>
    //             <a href="/">Пользователи</a>
    //           </li>
    //         )}
    //         {context.isLoggedIn && (
    //           <li>
    //             <a href="/">Админ</a>
    //           </li>
    //         )}
    //         {context.isLoggedIn && (
    //           <li>
    //             <button onClick={props.onLogout}>Выйти</button>
    //           </li>
    //         )}
    //       </ul>
    //     </nav>
    //   }}
    //   {/* <nav className={styles.nav}>
    //     <ul>
    //       {props.isLoggedIn && (
    //         <li>
    //           <a href="/">Пользователи</a>
    //         </li>
    //       )}
    //       {props.isLoggedIn && (
    //         <li>
    //           <a href="/">Админ</a>
    //         </li>
    //       )}
    //       {props.isLoggedIn && (
    //         <li>
    //           <button onClick={props.onLogout}>Выйти</button>
    //         </li>
    //       )}
    //     </ul>
    //   </nav> */}
    // </AuthContext.Consumer>

    <nav className={styles.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Пользователи</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Админ</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Выйти</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
