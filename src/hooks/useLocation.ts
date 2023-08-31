import { useLocation, useHistory } from "react-router-dom";
import querystring, { ParsedUrlQuery, ParsedUrlQueryInput } from "querystring";

export const useSearchQuery = (): ParsedUrlQuery => {
    const { search } = useLocation();
    return querystring.parse(search.substr(1));
};
export const useSetSearchQuery = (): ((obj: ParsedUrlQueryInput, exact?: boolean) => void) => {
    const history = useHistory();
    const sq = querystring.parse(history.location.search.substr(1));
    return (obj: ParsedUrlQueryInput, exact = false) => {
        const toParams = exact ? obj : { ...sq, ...obj };
        for (const key in toParams) {
            if (
                toParams.hasOwnProperty(key) &&
                (toParams[key] === null || toParams[key] === undefined)
            ) {
                delete toParams[key];
            }
        }
        const params = querystring.stringify(toParams);
        history.push(`${history.location.pathname}?${params}`);
    };
};
