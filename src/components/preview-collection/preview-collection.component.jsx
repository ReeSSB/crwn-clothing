import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./preview-collection.component.styles.scss";

const PreviewCollection = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div class="preview">
				{items
					.filter((item, index) => index < 4)
					.map(({ id, ...OtheritemProps }) => (
						<CollectionItem key={id} {...OtheritemProps} />
					))}
			</div>
		</div>
	);
};

export default PreviewCollection;
