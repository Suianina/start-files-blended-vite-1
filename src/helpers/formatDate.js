import { formatDistanceToNow } from 'date-fns';

export const formateDateToNow= date =>{
    return formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true })
};