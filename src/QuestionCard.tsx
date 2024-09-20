import type { FC } from "react";

type PropsType = {
	id: string;
	title: string;
	isPublished: boolean;
	deleteQuestion?: (id: string) => void;
	editQuestion?: (id: string) => void;
	publishQuestion?: (id: string) => void;
};

const QuestionCard: FC<PropsType> = (props) => {
	const {
		id,
		title,
		isPublished,
		deleteQuestion,
		editQuestion,
		publishQuestion,
	} = props;

	function edit(id: string) {
		editQuestion?.(id);
	}

	function del(id: string) {
		deleteQuestion?.(id);
	}

	function publish(id: string) {
		publishQuestion?.(id);
	}

	return (
		<div key={id} className="mt-3 border border-slate-500 p-3">
			<strong>{title}</strong>
			&nbsp;
			{isPublished ? (
				<span style={{ color: "green" }}>已发布</span>
			) : (
				<span>未发布</span>
			)}
			<button
				type="button"
				onClick={() => {
					edit(id);
				}}
			>
				编辑问卷
			</button>
			&nbsp;
			<button
				type="button"
				onClick={() => {
					publish(id);
				}}
			>
				发布问卷
			</button>
			&nbsp;
			<button
				type="button"
				onClick={() => {
					del(id);
				}}
			>
				删除问卷
			</button>
		</div>
	);
};

export default QuestionCard;
