import { Project } from "../typings";
import fetch from 'isomorphic-fetch'

export const fetchProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);

    console.log(res)
    const data = await res.json();

    const projects: Project[] = data.projects;

    console.log("fetching ", projects);

    return projects;
}