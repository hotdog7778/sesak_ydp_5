import {useEffect} from 'react'

// 커스텀 훅
export default function useTitle(title) {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = title;

        return () => (document.title = prevTitle);
    }, [title]);
}
