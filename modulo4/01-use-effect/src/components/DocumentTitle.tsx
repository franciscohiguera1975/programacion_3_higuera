// src/components/DocumentTitle.tsx

import { useEffect } from 'react'

export default function DocumentTitle() {
    const randomNumber = Math.random();
    useEffect(() => {
        document.title = 'Francisco Higuera App'
        console.log('efecto ejecutado')
        console.log('Número cualquiera ', randomNumber)
        const pi=3.14;
        console.log('Pi  ', pi)
        // Limpieza: restaurar el título al desmontar
        return () => {
            document.title = 'React App'
            console.log('limpieza ejecutada')
        }
    }, [randomNumber])

    return (
        <p style={{ fontSize: 14, color: '#6b7280' }}>
            El título de la pestaña cambió al montar este componente.
        </p>
    )
}