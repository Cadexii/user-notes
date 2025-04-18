"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";
import { useAuth } from "../../contexts/AuthContext";

const navigationItems = [
  { title: "My Notes", href: "/my-notes" },
  { title: "Settings", href: "/settings" },
];

const handleSignOut = async (e: React.MouseEvent<HTMLParagraphElement>) => {
  e.preventDefault();
  await signOut(auth);
};

const Header = () => {
  const { currentUser, isLoading } = useAuth();
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return `${styles.item} ${pathname === path && styles.isActive}`;
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.content}>
        {currentUser &&
          !isLoading &&
          navigationItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <p className={getLinkClass(item.href)}>{item.title}</p>
            </Link>
          ))}
      </div>
      {currentUser ? (
        <div className={styles.content}>
          <p className={styles.item} onClick={handleSignOut}>
            Log Out
          </p>
        </div>
      ) : (
        <p className={styles.titleItem}>UserNotes</p>
      )}
    </div>
  );
};

export default Header;
