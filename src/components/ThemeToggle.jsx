import React, {useState, useEffect} from "react";
import "./ThemeToggle.css";
export default function ThemeToggle(){
  const [on,setOn]=useState(()=>localStorage.getItem("dev-theme")==="dark");
  useEffect(()=>{ document.documentElement.setAttribute("data-theme", on ? "dark" : "light"); localStorage.setItem("dev-theme", on ? "dark" : "light"); },[on]);
  return <button className="theme-toggle" title="Toggle Theme" onClick={()=>setOn(s=>!s)}>{on ? "🌙" : "☀️"}</button>;
}
