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

    export function setUser(user: User): void {
        localStorage.setItem('user', JSON.stringify(user));
    }

    export function isAuthenticated() {
        return !!localStorage.getItem('user');
    }

    export async function validate(): Promise<boolean> {
        const user = getUser();

        if (user === null)
            throw new Error('User not authenticated');

        // TODO: validate user token

        return true;
    }

}
