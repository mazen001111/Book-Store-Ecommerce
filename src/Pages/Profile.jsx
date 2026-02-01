import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const nav = useNavigate()
    useEffect(() => {
        let token = localStorage.getItem("Token") || sessionStorage.getItem("Token")
        if (!token) {
            toast.error("please Login first")
            nav("/Login")
        }
    }, [])
    return (
        <div>Profile</div>
    )
}
