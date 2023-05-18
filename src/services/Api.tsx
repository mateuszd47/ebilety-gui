import $ from "jquery";

const URL: string = "https://localhost:7180";

export const createAccount = (
    fullName: string,
    emailAddress: string,
    password: string,
    confirmPassword: string,
    onSuccess: (data: any) => void,
    onError: (error: any) => void
) => {
    const url = `${URL}/api/Account/Register`;

    let data: string = JSON.stringify({
        fullName: fullName,
        emailAddress: emailAddress,
        password: password,
        confirmPassword: confirmPassword,
    });

    callApi(url, data, onSuccess, onError);
};

export const login = (
    email: string,
    password: string,
    onSuccess: (data: any) => void,
    onError: (error: any) => void
) => {
    const url = `${URL}/api/Account/Login`;

    let data: string = JSON.stringify({ emailAddress: email, password: password });

    callApi(url, data, onSuccess, onError);
};

const callApi = (
    url: string,
    data: any,
    onSuccess: (data: any) => void,
    onError: (error: any) => void,
    method: string = "POST"
) => {
    $.ajax({
        url: url,
        method: method,
        timeout: 0,
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
        success: (data) => {
            onSuccess({ data });
        },
        error: (data) => {
            if (onError) {
                onError(data);
            }
            console.log(data);
        },
    });
};
