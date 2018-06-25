let nextId = 2;

export const AddCard = ({ title, reason, towhom, datetime, frequency, remindForWeek, remindForMonth, remindForThreeMonth }) => {
    return {
        type: "ADD_REMINDER_CARD",
        id: nextId++,
        title,
        reason,
        towhom,
        datetime,
        frequency,
        remindForWeek,
        remindForMonth,
        remindForThreeMonth
    }
}

export const EditCard = ( id, { title, reason, towhom, datetime, frequency, remindForWeek, remindForMonth, remindForThreeMonth }) => {
	return {
        type: "EDIT_REMINDER_CARD",
        id,
        title,
        reason,
        towhom,
        datetime,
        frequency,
        remindForWeek,
        remindForMonth,
        remindForThreeMonth
	};
}

export const DeleteCard = id => {
	return {
        type: "DELETE_REMINDER_CARD",
        id
	};
}