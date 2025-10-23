// src/types/sql.d.ts
declare module 'sql.js' {
    function initSqlJs(options?: { locateFile?: (file: string) => string }): Promise<any>;
    export = initSqlJs;
}