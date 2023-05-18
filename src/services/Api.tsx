// import React from "react";
import $ from "jquery";

interface CreateAccount {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface LoginAccount {
    email: string;
    password: string;
}

const URL: string = "localhost:";

const createAccount = (
    email: string,
    password: string,
    onSuccess: (data: any) => void,
    onError: (error: any) => void
) => {
    const url = `${URL}/api/Account/Register`;

    let data = JSON.stringify({ email: email, password: password });

    callApi(url, data, onSuccess, onError);
};

const login = (
    email: string,
    password: string,
    onSuccess: (data: any) => void,
    onError: (error: any) => void
) => {
    const url = `${URL}/api/Account/Login`;

    let data = JSON.stringify({ email: email, password: password });

    callApi(url, data, onSuccess, onError);
};

const callApi = (
    url: string,
    data: string,
    onSuccess: (data: any) => void,
    onError: (error: any) => void,
    headers?: any,
    method: string = "POST"
) => {
    $.ajax({
        url: url,
        method: method,
        contentType: "application/json",
        dataType: "json",
        headers: headers,
        data: data,
        success: (data) => {
            onSuccess(data);
        },
        error: (data) => {
            if (onError) {
                onError(data);
            }
            console.log(data.message);
        },
    });
};

export default {
    createAccount,
    login,
    // findOrders,
};
