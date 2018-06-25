let nextId = 2;

export const AddGift = ({ cid, category, item, count }) => {
    return {
        type: "ADD_GIFT",
        cid,
        id: nextId++,
        category,
        item,
        count
    }
}

export const DeleteGift = id => {
	return {
        type: "DELETE_GIFT",
        id
	};
}