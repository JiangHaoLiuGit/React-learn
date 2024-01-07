import PropTypes from 'prop-types'
const user = {
    children:PropTypes.node,
    infos:PropTypes.shape({
        value:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired
    }),
    groupDatas:PropTypes.arrayOf(PropTypes.shape({
        value:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired
    })),//多选框组,单选框组,下拉框,
    chooseDatas: PropTypes.arrayOf(PropTypes.string)
}
export default user