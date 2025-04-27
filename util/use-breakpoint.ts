import { useEffect, useState } from "react"

export type Breakpoint = "MOBILE" | "TABLET" | "DESKTOP"

export const useBreakpoint = (): Breakpoint => {
    const [breakpoint, setBreakpoint] = useState<number>(0)

    function handleResize(){
        setBreakpoint(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        setBreakpoint(window.innerWidth)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    function getBreakpoint(): Breakpoint{
        if(breakpoint > 1200) return "DESKTOP"
        if(breakpoint > 600) return "TABLET"
        return "MOBILE"
    }
    
    return getBreakpoint()
}