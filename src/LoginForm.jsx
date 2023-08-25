const LoginForm = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-4 items-center w-full mt-2">
                <label>
                    <p>이메일</p>
                    <input className="flex-grow h-8 bg-transparent border rounded" type="text" required />
                </label>
                <label>
                    <p>패스워드</p>
                    <input className="flex-grow h-8 bg-transparent border rounded" type="text" required />
                </label>
                {/* todo input[e] */}
                {/* submit button[s] */}
                <button id="submit" className="h-8 px-2 text-sm font-medium border rounded">
                    로그인
                </button>
                {/* submit button[e] */}
            </div>
        </form>        
    )
}

export default LoginForm