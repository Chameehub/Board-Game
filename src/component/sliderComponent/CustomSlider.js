import {withStyles} from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const CustomSlider  = ({
                           cursorIndex,
                           sliderStyle
                       }) => {

    /**
     * Slider UI component
     *
     * @type {React.ComponentType<Omit<JSX.LibraryManagedAttributes<OverridableComponent<SliderTypeMap>, React.ComponentProps<OverridableComponent<SliderTypeMap>>>, keyof ({theme: Theme} & {classes: ClassNameMap<ClassKeyOfStyles<"thumb"|"valueLabel"|"root"|"rail"|"active"|"track"|"mark">>}) | {classes: ClassNameMap<ClassKeyOfStyles<"thumb"|"valueLabel"|"root"|"rail"|"active"|"track"|"mark">>}> & StyledComponentProps<"thumb"|"valueLabel"|"root"|"rail"|"active"|"track"|"mark">>}
     */
    const PrettoSlider = withStyles({
        root: {
            color: '#52af77',
            height: 8,
        },
        thumb: {
            height: 24,
            width: 24,
            backgroundColor: '#fff',
            border: '2px solid currentColor',
            marginTop: -8,
            marginLeft: -12,
            '&:focus, &:hover, &$active': {
                boxShadow: 'inherit',
            },
        },
        active: {},
        valueLabel: {
            left: 'calc(-50% + 4px)',
        },
        track: {
            height: 8,
            borderRadius: 4,
        },
        rail: {
            height: 8,
            borderRadius: 4,
        },
        mark: {
            backgroundColor: '#000000',
            height: 20,
            width: 2,
            marginTop:-5
        },
    })(Slider);

    /**
     * Mille marker
     *
     * @type {[{value: number}]}
     */
    const marks = [
        {
            value: 50,
        },
    ];

    return(
        <div className={sliderStyle}>
            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" marks={marks} defaultValue={cursorIndex} />
        </div>
    )
}

export default CustomSlider
