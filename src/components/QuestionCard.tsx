import type { FC } from "react";
import classNames from "classnames";

type PropsType = {
	id: string;
	title: string;
	isPublished: boolean;
	isStar: boolean;
	answerCount: number;
	createdAt: string;
	deleteQuestion?: (id: string) => void;
	editQuestion?: (id: string) => void;
	publishQuestion?: (id: string) => void;
};

const QuestionCard: FC<PropsType> = (props: PropsType) => {
	const {
		id,
		title,
		isPublished,
		isStar,
		answerCount,
		createdAt,
		deleteQuestion,
		editQuestion,
		publishQuestion,
	} = props;

	const classes = classNames(
		"mt-3 border  p-3",
		isPublished ? "border-slate-500" : "border-slate-300",
	);

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
		<div key={id} className={classes}>
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
