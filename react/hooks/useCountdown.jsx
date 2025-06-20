const useCountdown = (targetDate) => {
    const targetTimestamp = new Date(targetDate).getTime()
    const [remainingTime, setRemainingTime] = useState(() => {
        return Math.max(0, targetTimestamp - Date.now());
    });
    useEffect(() => {
        if (remainingTime <= 0) {
            setRemainingTime(0)
        }
        const intervalId = setInterval(() => {
            const newRemaining = targetTimestamp - Date.now();
            if (newRemaining <= 0) {
                setRemainingTime(0)
                clearTimeout(intervalId)
            } else {
                setRemainingTime(newRemaining)
            }

        }, 1000)
        return () => clearTimeout(intervalId)
    }, [targetTimestamp]);
    return remainingTime
}
export default useCountdown
