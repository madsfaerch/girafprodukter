import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry }) => {
  console.log(entry);
  const data = entry.getIn(['data']).toJS();
  console.log(data);

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default IndexPagePreview
