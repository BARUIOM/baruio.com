export namespace Authenticator {

    export type User = {
        accessToken: string;
        refreshToken: string;
    };

    export function getUser(): User | null {
        if (Authenticator.isAuthenticated()) {
            const user = localStorage.getItem('user');

            return JSON.parse(user);
        }

        return null;
    }

    export function isAuthenticated() {
        return !!localStorage.getItem('user');
    }

}
