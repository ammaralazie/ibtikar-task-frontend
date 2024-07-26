export default ({ next, router }: any) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        next();
    } else {
        router.push('/login');
    }
};