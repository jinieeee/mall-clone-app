'use client';

import React, {useEffect, useState} from 'react';
import styles from './Header.module.scss';
import Link from "next/link";
import {auth} from "@/firebase/firebase";
import {signOut, onAuthStateChanged} from "firebase/auth";
import {toast} from "react-toastify";
import {usePathname, useRouter} from "next/navigation";
import InnerHeader from "@/layouts/innerHeader/InnerHeader";

const Header = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [displayName, setDisplayName] = useState('');

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                if(user.displayName === null) {
                    const u1 = user.email.substring(0, user.email.indexOf('@'));
                    const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
                    setDisplayName(uName);
                } else {
                    setDisplayName(user.displayName);
                }

                // todo save user info to redux store
            } else {
                setDisplayName('');
                // todo remove user info from redux store
            }
        })
    }, []);

    const logoutUser = (e) => {
        e.preventDefault();
        signOut(auth)
            .then(() => {
                toast.success('로그아웃 되었습니다.');
                router.push('/');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }

    if(pathname === '/login' || pathname === '/register' || pathname === '/reset') {
        return;
    }

    return (
        <header>
            <div className={styles.loginBar}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link href={"/login"}>로그인</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href={"/admin/dashboard"}>관리자</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href={"/order-history"}>주문 목록</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href={"/"} onClick={logoutUser}>로그아웃</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href={"/"}>제휴 마케팅</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href={"/"}>쿠팡 플레이</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href={"/"}>고객센터</Link>
                    </li>
                </ul>
            </div>
            {pathname.startsWith('/admin') ? null : <InnerHeader/>}
        </header>
    );
};

export default Header;
