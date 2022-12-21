import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Entity_()
export class ValidatorCollator {
    constructor(props?: Partial<ValidatorCollator>) {
        Object.assign(this, props)
    }

    /**
     * Block number
     */
    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Index_()
    @Column_("int4", {nullable: false})
    idealCount!: number

    @Index_()
    @Column_("int4", {nullable: false})
    count!: number

    @Index_()
    @Column_("text", {nullable: false})
    blockHash!: string
}