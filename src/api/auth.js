const API_BASE = 'http://localhost:3000/api/auth';


export async function registerUser(email, password) {

    const res = await fetch(`${API_BASE}/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({email, password}),
    });

    const data = await res.json();
    if(!res.ok) throw new Error(data.Error || 'Registered failed');
    return data.user
    
}   


export async function loginUser(email, password) {

    const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({email, password}),
    })

    const data = await res.json();
    if(!res.ok) throw new Error(data.Error || 'Login failed');
    return data.user
    
} 


export async function getMe() {
    const res = await fetch(`${API_BASE}/me`,{
        credentials: 'include',

    });

    if(!res.ok) return null;
    const data = await res.json();
    return data.user;
}

export async function logOut() {
    
    const res = await fetch(`${API_BASE}/logout`,{
        credentials: 'include',
        method: 'POST',
    });

    if(!res.ok) throw new Error('Logout failed');

}