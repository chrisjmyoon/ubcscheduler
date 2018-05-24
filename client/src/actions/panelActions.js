import { FETCH_COURSELIST, ADD_COURSE, REMOVE_COURSE, TOGGLE_COURSE_TERM, TOGGLE_COURSE, ADD_TEMP, REMOVE_TEMP } from '../actions/types';


export const fetchCourselist = () => dispatch => {
    console.log("Fetching courselist")
    fetch('/api/v1/courselist')
    .then(res => res.json())
    .then(courselist => {            
            dispatch({
                type: FETCH_COURSELIST,
                payload: courselist.list
            })
        }        
    )
};

export const addCourse = (courseCode) => dispatch => {
    console.log("Adding course " + courseCode)
    courseCode = courseCode.replace(" ", "_")
    fetch(`/api/v1/course/${courseCode}`)
    .then(res => res.json())
    .then(course => {
        course.code = course.code.replace("_", " ")
        course.active = true;
        course.term = "t1";
        dispatch({
            type: ADD_COURSE,
            payload: course
        })
    })
};

export const removeCourse = (code) => dispatch => {
    dispatch({
        type: REMOVE_COURSE,
        payload: code
    })
};

export const toggleCourseTerm = (code, term) => dispatch => {
    dispatch({
        type: TOGGLE_COURSE_TERM,
        payload: {code: code, term: term}
    })
}

export const toggleCourse = (course) => dispatch => {
    dispatch({
        type: TOGGLE_COURSE,
        payload: course
    })
}

export const addTemp = (section) => dispatch => {
    dispatch({
        type: ADD_TEMP,
        payload: section
    })
}

export const removeTemp = () => dispatch => {
    dispatch({
        type: REMOVE_TEMP
    })
}