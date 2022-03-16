interface getUser {
    success: {
        user: 
    },
    failed:{

    }
}

export type getUserAction = getUser['success'] | getUser['failed']