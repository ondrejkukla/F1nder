import './Table.css';

interface TableProps<T> {
	data: T[];
	columns: { [key: string]: string };
	renderRow: (item: T) => JSX.Element;
}

const Table = <T,>({ data, columns, renderRow }: TableProps<T>) => {
	const columnKeys = Object.keys(columns).filter((key) => key !== 'caption');

	return (
		<table className="table">
			<caption>
				<h4>{columns.caption}</h4>
			</caption>
			<thead>
				<tr>
					{columnKeys.map((key) => (
						<th key={key}>{columns[key]}</th>
					))}
				</tr>
			</thead>
			<tbody>{data.map(renderRow)}</tbody>
		</table>
	);
};

export default Table;
