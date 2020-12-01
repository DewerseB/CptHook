import React, { useState, useEffect} from 'react';

/** Custom hook
 * Il est possible d'utiliser d'autres hooks à l'intérieur des hooks custom */
export function useRandom(max) {

    /** Crée une variable d'état pour le hook
     * Elle est partagée avec le composant appelant le hook.
     * Mais n'est pas partagée avec d'autres appels de ce hook.
     */
    const [random, setRandom] = useState(Math.floor(Math.random() * max));


    /** componentDidMount + componentDidUpdate + componentWillUnmount
     * Sera appelé à chaque fois que le composant (ou le hook) qui appelle ce hook est mise à jour 
     */
    useEffect(() => {

        /** Met à jour random à chaque seconde */
        const interval = setInterval(() => {
            console.log(random)
            setRandom(Math.floor(Math.random() * max))
          }, 1000);

        /** Nettoyage */
        return () => clearInterval(interval);

    });
    
    return random;
}