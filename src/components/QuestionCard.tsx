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
		<div className="mb-5 rounded p-3 bg-white hover:shadow">
			<div className="flex">
				<div className="flex-1">
					<a href="javascript:void(0)">{title}</a>
				</div>
				<div className="flex-1 text-right text-xs">
					{isPublished ? (
						<span className="text-green-500">已发布</span>
					) : (
						<span>未发布</span>
					)}
					&nbsp;
					<span>答卷: {answerCount}</span>
					&nbsp;
					<span>{createdAt}</span>
				</div>
			</div>
			<div className="flex">
				<div className="flex-1">
					<button className="bg-slate-500">编辑问卷</button>
					<button className="bg-slate-500">数据统计</button>
				</div>
				<div className="flex-1 text-right">
					<button className="bg-slate-500">标星</button>
					<button className="bg-slate-500">复制</button>
					<button className="bg-slate-500">删除</button>
				</div>
			</div>
		</div>
	);
};

export default QuestionCard;
