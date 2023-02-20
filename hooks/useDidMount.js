import { useEffect, useRef } from 'react';

/**
 * Custom hook untuk melihat apakah component telah mounting.
 * @function
 * @returns {Bool} - bisa menjadi satu kondisi eksekusi dengan mempertimbangkan React Lifecycle
 * @example const didMount = useDidMount(); useEffect(() => {if (state !== INITIAL_STATE && didMount) doSomething()}, [state])
 */
export function useDidMount() {
    const mountRef = useRef(false);
    useEffect(() => {
        mountRef.current = true
    }, [])
    return mountRef.current
}