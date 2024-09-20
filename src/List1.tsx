import { type FC, useState } from "react";
import QuestionCard from "./QuestionCard";

const List1: FC = () => {
	// 列表页
	const [questionList, setQuestionList] = useState([
		{ id: "q1", title: "问卷1", isPublished: false },
		{ id: "q2", title: "问卷2", isPublished: true },
		{ id: "q3", title: "问卷3", isPublished: false },
		{ id: "q4", title: "问卷4", isPublished: true },
	]);

	function add() {
		const r = Math.random().toString().slice(-3);
		setQuestionList([
			...questionList,
			{
				id: `q${r}`,
				title: `问卷${r}`,
				isPublished: false,
			},
		]);
	}

	function editQuestion(id: string) {
		console.log(`edit ${id}`);
	}

	function deleteQuestion(id: string) {
		setQuestionList(questionList.filter((q) => q.id !== id));
	}

	function publishQuestion(id: string) {
		setQuestionList(
			questionList.map((q) => {
				if (q.id === id) {
					q.isPublished = true;
				}
				return q;
			}),
		);
	}

	return (
		<div>
			<h1>问卷列表页</h1>
			<div>
				{questionList.map((question) => {
					const { id, title, isPublished } = question;
					return (
						<QuestionCard
							key={id}
							id={id}
							title={title}
							isPublished={isPublished}
							editQuestion={editQuestion}
							deleteQuestion={deleteQuestion}
							publishQuestion={publishQuestion}
						/>
					);
				})}
			</div>
			<button type="button" onClick={add}>
				{" "}
				新增问卷{" "}
			</button>
		</div>
	);
};

export default List1;
