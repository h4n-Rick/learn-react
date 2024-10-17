import { type FC, useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import { produce } from "immer";
import { useTitle } from "ahooks";

const rowQuestionList = [
	{
		id: "q1",
		title: "问卷1",
		isPublished: false,
		isStar: false,
		answerCount: 0,
		createdAt: "2022-05-07",
	},
	{
		id: "q2",
		title: "问卷2",
		isPublished: true,
		isStar: false,
		answerCount: 2,
		createdAt: "2023-11-21",
	},
	{
		id: "q3",
		title: "问卷3",
		isPublished: false,
		isStar: true,
		answerCount: 3,
		createdAt: "2023-11-22",
	},
	{
		id: "q4",
		title: "问卷4",
		isPublished: true,
		isStar: false,
		answerCount: 0,
		createdAt: "2023-11-23",
	},
];

const List: FC = () => {
	useTitle("小慕问卷 - 我的问卷");

	// 列表页
	const [questionList, setQuestionList] = useState(rowQuestionList);

	function add() {
		const r = Math.random().toString().slice(-3);
		setQuestionList(
			produce((draft) => {
				draft.push({
					id: `q${r}`,
					title: `问卷${r}`,
					isPublished: false,
					isStar: false,
					answerCount: 0,
					createdAt: new Date().toLocaleString(),
				});
			}),
		);
	}

	function editQuestion(id: string) {
		console.log(`edit ${id}`);
	}

	function deleteQuestion(id: string) {
		setQuestionList(
			produce((draft) => {
				const index = draft.findIndex((q) => q.id === id);
				draft.splice(index, 1);
			}),
		);
	}

	function publishQuestion(id: string) {
		setQuestionList(
			produce((draft) => {
				const q = draft.find((q) => q.id === id);
				if (q) q.isPublished = true;
			}),
		);
	}

	return (
		<>
			{/* header */}
			<div className="mb-5 flex">
				<div className="flex-1">
					<h3>我的问卷</h3>
				</div>
				<div className="flex-1 text-right">搜索</div>
			</div>

			<div className="mb-5">
				{questionList.map((q) => {
					const { id } = q;
					return <QuestionCard key={id} {...q} />;
				})}
			</div>
			<div className="text-center">footer</div>
		</>
	);
};

export default List;
