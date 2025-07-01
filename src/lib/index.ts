// place files you want to import through the `$lib` alias in this folder.

/** user login -> id map */
export const USER_MAP: Promise<Map<string, number>> = fetch(
    "https://raw.githubusercontent.com/blableblup/gofish/refs/heads/main/leaderboards/global/profiles/nameID.json"
)
    .then((resp) => resp.json())
    .then((data: { Name: string; ID: number }[]) => new Map(data.map((e) => [e.Name, e.ID])));
