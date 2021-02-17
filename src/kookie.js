/**
 * Kookie
 * Copyright (c) Simon Raichl 2021
 * MIT License
 */

const get = key => {
    const value = document.cookie.split(`${key}=`)[1];

    return typeof value === "string" && key?.length
        ? decodeURIComponent(value.replace(/; .+?$/g, ""))
        : null;
};

const getAll = () => new Map(
    document.cookie
        .split("; ")
        .map(keyValuePair => keyValuePair.split("=", 2).map(decodeURIComponent))
);

const set = (key, value = "", { secure, maxAge, expires, path, sameSite } = {}) => {
    let cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)};`;

    if (secure) {
        cookie += "secure;"
    }

    if (isFinite(maxAge)) {
        cookie += `max-age=${maxAge};`;
    }

    if (expires instanceof Date) {
        cookie += `expires=${expires.toUTCString()};`
    }

    if (path) {
        cookie += `path=${path};`;
    }

    if (sameSite) {
        cookie += `samesite=${sameSite};`;
    }

    return document.cookie = cookie;
};

const remove = key => set(key, "", { maxAge: -1 });

export default { get, getAll, set, remove };