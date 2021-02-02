import React, { Children } from 'react';
import NextLink from 'next/link';

export default function Link({children, href, ...props}) {
    return (
        <NextLink href={href} passHref>
            <a {...props}>
                {/* eslint-disable-next-line jsx-ally/anchor-is-valid */}
                {children}
            </a>
        </NextLink>
    );
}