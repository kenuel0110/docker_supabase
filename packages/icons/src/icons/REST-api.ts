import createSupabaseIcon from '../createSupabaseIcon';

/**
 * @component @name RESTApi
 * @description Supabase SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBib3JkZXItcmFkaXVzOiAycHgiICAgIHN0cm9rZS13aWR0aD0iMSI+CiAgICA8cGF0aAogICAgICAgIGQ9Ik0zLjIwOTQ3IDEyLjEwNTJDMy4yMDk0NyAxMy40NDAzIDMuNTA3MTUgMTQuNzA2IDQuMDM5NzcgMTUuODM5NE0xMS45OTk3IDMuMzE0OTRDMTAuNjM5MSAzLjMxNDk0IDkuMzUwNjYgMy42MjQwOCA4LjIwMDg1IDQuMTc1OTRNMjAuNzg5OSAxMi4xMDUyQzIwLjc4OTkgMTAuNzU2NiAyMC40ODYyIDkuNDc4OTggMTkuOTQzNSA4LjMzNjk0TTExLjk5OTcgMjAuODk1NEMxMy4zNTc2IDIwLjg5NTQgMTQuNjQzNiAyMC41ODc1IDE1Ljc5MTcgMjAuMDM3N00xNS43OTE3IDIwLjAzNzdDMTYuMzMzNCAyMC44MTggMTcuMjM2IDIxLjMyODkgMTguMjU3OCAyMS4zMjg5QzE5LjkxNDcgMjEuMzI4OSAyMS4yNTc4IDE5Ljk4NTcgMjEuMjU3OCAxOC4zMjg5QzIxLjI1NzggMTYuNjcyIDE5LjkxNDcgMTUuMzI4OSAxOC4yNTc4IDE1LjMyODlDMTYuNjAxIDE1LjMyODkgMTUuMjU3OCAxNi42NzIgMTUuMjU3OCAxOC4zMjg5QzE1LjI1NzggMTguOTYzOSAxNS40NTUxIDE5LjU1MjggMTUuNzkxNyAyMC4wMzc3Wk00LjAzOTc3IDE1LjgzOTRDMy4yNDAyMiAxNi4zNzgyIDIuNzE0MzYgMTcuMjkyMSAyLjcxNDM2IDE4LjMyODlDMi43MTQzNiAxOS45ODU3IDQuMDU3NSAyMS4zMjg5IDUuNzE0MzYgMjEuMzI4OUM3LjM3MTIxIDIxLjMyODkgOC43MTQzNiAxOS45ODU3IDguNzE0MzYgMTguMzI4OUM4LjcxNDM2IDE2LjY3MiA3LjM3MTIxIDE1LjMyODkgNS43MTQzNiAxNS4zMjg5QzUuMDk0MjIgMTUuMzI4OSA0LjUxODAzIDE1LjUxNyA0LjAzOTc3IDE1LjgzOTRaTTguMjAwODUgNC4xNzU5NEM3LjY2MTU4IDMuMzc4OSA2Ljc0OTE1IDIuODU0OTggNS43MTQzNiAyLjg1NDk4QzQuMDU3NSAyLjg1NDk4IDIuNzE0MzYgNC4xOTgxMyAyLjcxNDM2IDUuODU0OThDMi43MTQzNiA3LjUxMTgzIDQuMDU3NSA4Ljg1NDk4IDUuNzE0MzYgOC44NTQ5OEM3LjM3MTIxIDguODU0OTggOC43MTQzNiA3LjUxMTgzIDguNzE0MzYgNS44NTQ5OEM4LjcxNDM2IDUuMjMyOTIgOC41MjUwMyA0LjY1NTA4IDguMjAwODUgNC4xNzU5NFpNMTkuOTQzNSA4LjMzNjk0QzIwLjczNjggNy43OTcwOSAyMS4yNTc4IDYuODg2ODggMjEuMjU3OCA1Ljg1NDk4QzIxLjI1NzggNC4xOTgxMyAxOS45MTQ3IDIuODU0OTggMTguMjU3OCAyLjg1NDk4QzE2LjYwMSAyLjg1NDk4IDE1LjI1NzggNC4xOTgxMyAxNS4yNTc4IDUuODU0OThDMTUuMjU3OCA3LjUxMTgzIDE2LjYwMSA4Ljg1NDk4IDE4LjI1NzggOC44NTQ5OEMxOC44ODI4IDguODU0OTggMTkuNDYzMSA4LjY2Mzg4IDE5Ljk0MzUgOC4zMzY5NFoiIC8+Cjwvc3ZnPg==)
 *
 * @param {Object} props - Supabase icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const RESTApi = createSupabaseIcon('RESTApi', [
  [
    'path',
    {
      d: 'M3.20947 12.1052C3.20947 13.4403 3.50715 14.706 4.03977 15.8394M11.9997 3.31494C10.6391 3.31494 9.35066 3.62408 8.20085 4.17594M20.7899 12.1052C20.7899 10.7566 20.4862 9.47898 19.9435 8.33694M11.9997 20.8954C13.3576 20.8954 14.6436 20.5875 15.7917 20.0377M15.7917 20.0377C16.3334 20.818 17.236 21.3289 18.2578 21.3289C19.9147 21.3289 21.2578 19.9857 21.2578 18.3289C21.2578 16.672 19.9147 15.3289 18.2578 15.3289C16.601 15.3289 15.2578 16.672 15.2578 18.3289C15.2578 18.9639 15.4551 19.5528 15.7917 20.0377ZM4.03977 15.8394C3.24022 16.3782 2.71436 17.2921 2.71436 18.3289C2.71436 19.9857 4.0575 21.3289 5.71436 21.3289C7.37121 21.3289 8.71436 19.9857 8.71436 18.3289C8.71436 16.672 7.37121 15.3289 5.71436 15.3289C5.09422 15.3289 4.51803 15.517 4.03977 15.8394ZM8.20085 4.17594C7.66158 3.3789 6.74915 2.85498 5.71436 2.85498C4.0575 2.85498 2.71436 4.19813 2.71436 5.85498C2.71436 7.51183 4.0575 8.85498 5.71436 8.85498C7.37121 8.85498 8.71436 7.51183 8.71436 5.85498C8.71436 5.23292 8.52503 4.65508 8.20085 4.17594ZM19.9435 8.33694C20.7368 7.79709 21.2578 6.88688 21.2578 5.85498C21.2578 4.19813 19.9147 2.85498 18.2578 2.85498C16.601 2.85498 15.2578 4.19813 15.2578 5.85498C15.2578 7.51183 16.601 8.85498 18.2578 8.85498C18.8828 8.85498 19.4631 8.66388 19.9435 8.33694Z',
      key: 'xusdjk',
    },
  ],
]);

export default RESTApi;